import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_STUDENTS } from '../lib/queries/students';
import type { LeaderboardStudentEntry } from '../lib/queries/types';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import LeaderBoardCard from './LeaderBoardCard';

import '../styles/LeaderBoard.scss';

const LeaderBoard: React.FC = () => {
  const { data, loading, error } = useQuery<{ studentsLeaderboard: { students: LeaderboardStudentEntry[] } }>(
    GET_STUDENTS
  );

  if (loading) return <Spinner />;
  if (error || !data) return <ErrorMessage message="Failed to load leaderboard data." />;

  const students: LeaderboardStudentEntry[] = data?.studentsLeaderboard?.students || [];
  const top3: LeaderboardStudentEntry[] = [...students].sort((a, b) => b.points - a.points).slice(0, 3);

  return (
    <section className="leader-board ">
      {top3.map((student, index) => (
        <LeaderBoardCard key={student.id} student={student} rank={index} />
      ))}
    </section>
  );
};

export default LeaderBoard;
