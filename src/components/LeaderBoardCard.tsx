import data from '../assets/strings.json';
import '../styles/LeaderCard.scss';
import type { LeaderboardStudentEntry } from '../lib/queries/types';
import { formatNumber } from '../lib/numFormatter';

interface Props {
  student: LeaderboardStudentEntry;
  rank: number;
}

const rankClasses = ['first-place', 'second-place', 'third-place'];

const positions: { [key: string]: string } = {
  '0': data['first place'].en,
  '1': data['second place'].en,
  '2': data['third place'].en,
};

const LeaderBoardCard = ({ student, rank }: Props) => {
  return (
    <article className={`card ${rankClasses[rank]}`}>
      <section className="avatar">
        <img
          src={student.studentImage || `avatar/avatar-${rank.toString().padStart(2, '0')}.png`}
          alt={student.name.en}
        />
      </section>

      <section className="rank-name">
        <h3>{positions[rank.toString()]}</h3>
        <h4 className="poppins-semibold">{student.name.en}</h4>
      </section>

      <section className="points">
        <hr />

        <span className="poppins-semibold">
          {formatNumber({
            number: student.points,
            delimiter: ' ',
            decimalAmount: Number.isInteger(student.points) ? 0 : 2,
          })}{' '}
          PT{student.points === 1 ? '' : 'S'}
        </span>
      </section>

      <section className="grade-section">
        <div className="side">
          <img src="/grade.svg" alt="" />
          <div>
            <p>{data.grade.en}</p>
            <p className="poppins-semibold">{student.grade}</p>
          </div>
        </div>
        <div className="side">
          <img src="/section.svg" alt="" />
          <div>
            <p>{data.section.en}</p>
            <p className="poppins-semibold">{student.section}</p>
          </div>
        </div>
      </section>

      <span className="position-badge poppins-bold ">{rank + 1}</span>
    </article>
  );
};

export default LeaderBoardCard;
