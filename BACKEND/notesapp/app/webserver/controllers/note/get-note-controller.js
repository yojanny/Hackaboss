'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

/**
 * 
 * @param {Object} payload  { noteId: "a valid uuid" }
 */
async function validate(payload) {
  const schema = Joi.object({
    noteId: Joi.string().guid({
      version: ['uuidv4'],
    }).required(),
  });

  Joi.assert(payload, schema);
}

/**
 * 
 * @param {Array} rows Each row note with a tagId / tag per row
 * @returns {Object} note Note object with array of tags:
 *  {
 *    title: "title note",
 *    tags: [{
 *      tagId: "uuid-of-tag-id-1",
 *      tag: "JS"
 *    }]
 *  }
 */
function hydrateNoteTags(rows) {
  const noteHydrated = rows.reduce((acc, rawNote) => {
    /**
     * esta nota tiene un tag?
     */
    const tag = rawNote.tagId ? {
      tagId: rawNote.tagId,
      tag: rawNote.tag,
    } : undefined;

    const notaProcesada = acc.id !== undefined;

    /**
     * La primera vez creamos el objeto nota con el array de tags
     * si tiene
     */
    if (!notaProcesada) {
      return {
        ...acc,
        ...rawNote,
        createdAt: rawNote.created_at,
        updatedAt: rawNote.updated_at,
        tags: tag ? [tag] : [],
        tagId: undefined,
        tag: undefined,
        created_at: undefined,
        updated_at: undefined,
      };
    }

    /**
     * El acumulador ya tiene la nota, necesitamos ir 
     * añadiendo los tags
     */
    return {
      ...acc,
      tags: [ ...acc.tags, tag ],
    };
  }, {});

  return noteHydrated;
}

async function getNote(req, res, next) {
  const { noteId } = req.params;
  const { userId } = req.claims;
  try {
    const payload = {
      noteId,
    };
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }

  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT n.id, n.title,
      n.content, n.created_at, n.updated_at, t.id AS tagId, t.tag
      FROM notes n
      LEFT JOIN notes_tags nt
        ON n.id = nt.note_id
      LEFT JOIN tags t
        ON nt.tag_id = t.id
      WHERE
        n.id = ?
        AND n.user_id = ?
        AND n.deleted_at IS NULL`;
    const [rows] = await connection.execute(sqlQuery, [noteId, userId]);
    console.log(rows);
    connection.release();

    if (rows.length === 0) {
      return res.status(404).send();
    }

    const note = hydrateNoteTags(rows);
    return res.send(note);
  } catch(e) {
    if (connection) {
      connection.release();
    }
    
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getNote;
