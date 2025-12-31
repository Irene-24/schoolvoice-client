import React from 'react';

import '../styles/LeaderBoardHeader.scss';
import data from '../assets/strings.json';

import { useQuery } from '@apollo/client/react';
import { GET_LEADERBOARD } from '../lib/queries/leaderboard';
import type { GetLeaderboardData } from '../lib/queries/types';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

const LeaderBoardHeader: React.FC = () => {
  const { data: school, loading, error } = useQuery<GetLeaderboardData>(GET_LEADERBOARD);

  if (loading) return <Spinner />;
  if (error || !school) return <ErrorMessage message="Failed to load school information." />;

  return (
    <header className="leader-header poppins-medium">
      <img src={school?.studentsLeaderboard.school.image} alt="School Logo" />
      <section>
        <p className="">{data.leaderboard.en}</p>
        <h1 className="poppins-bold">{school?.studentsLeaderboard.school.name.en}</h1>
      </section>
    </header>
  );
};

export default LeaderBoardHeader;
