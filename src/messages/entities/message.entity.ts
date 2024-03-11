import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Message {
    @PrimaryGeneratedColumn({name: 'message_id'})
    id: number;
    text: string;

    @ManyToOne(() => User, user => user.sentMessages)
    sender: User;

    @ManyToOne(() => User, user => user.receivedMessages)
    recipient: User;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    date_sent: Date;

    @Column()
    status: Status;
}


enum Status {
    sent,
    delivered,
    read
}

status: Status;