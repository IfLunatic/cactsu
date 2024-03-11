import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, user => user.contacts)
    contact_id: User;

    @ManyToOne(() => User, user => user.contactUserId)
    user_id: User;
}
