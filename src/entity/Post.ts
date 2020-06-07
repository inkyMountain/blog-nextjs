import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text') public title: string;
  @Column('text') public content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
