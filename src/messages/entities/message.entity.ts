import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./message.status";


@Entity()
export class Message {
  @PrimaryGeneratedColumn({ name: 'message_id' })
  id: number;

  text: string;

  @ManyToOne(() => User, (user) => user.sentMessages)
  sender: User;

  @ManyToOne(() => User, (user) => user.receivedMessages)
  recipient: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  sentDate: Date;

  @Column()
  status: Status;
}


