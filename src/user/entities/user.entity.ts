import { Contact } from "src/contact/entities/contact.entity";
import { Message } from "src/messages/entities/message.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'bytea'})
    avatar: Buffer;

    @Column()
    phoneNumber: string;
    
    @Column()
    username: string;
    
    @Column()
    password: string;
    
    @Column()
    name: string;
    
    @Column()
    surname: string;

    @Column({ type: 'json' })
    @OneToMany(() => Contact, contact => contact.contact_id)
    contacts: User[];

    @Column({ type: 'json' })
    @OneToMany(() => Contact, contact => contact.user_id)
    contactUserId: User[];

    @ManyToMany(() => Message, message => message.sender)
    sentMessages: Message[];
  
    @ManyToMany(() => Message, message => message.recipient)
    receivedMessages: Message[];
}
