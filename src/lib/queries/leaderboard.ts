import { gql } from '@apollo/client';

export const GET_LEADERBOARD = gql`
  query GetLeaderboard {
    studentsLeaderboard(schoolId: "1") {
      school {
        id
        name {
          en
        }
        image
      }
    }
  }
`;
