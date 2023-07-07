create table books
(
    id          int auto_increment,
    kategori_id int          null,
    judul       varchar(255) null,
    penulis     varchar(255) null,
    constraint books_pk
        primary key (id)
);

