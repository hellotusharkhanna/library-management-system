import { IMember } from 'src/app/modules/member/shared/models/member.model';

export interface IIssueReturn {
  bookId: string;
  member: IMember;
  bookTitle: string;
  issueDate: Date;
  expiryDate: Date;
  returnDate: Date;
  fine: number;
  currency: string;
}
