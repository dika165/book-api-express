'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('books',{
    id: {type: 'int', primaryKey: true, autoIncrement:true},
    kategori_id: {type:'int'},
    judul: 'string',
    penulis: 'string',
    crated_at: 'datetime',
    updated_at: 'datetime',
    deleted_at: 'datetime'
  });
};

exports.down = function(db) {
  return db.dropTable('books');
};

exports._meta = {
  "version": 1
};
