import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
  query GetStudents {
    studentsLeaderboard(schoolId: "1") {
      students {
        id
        name {
          en
        }
        grade
        section
        points
        studentImage
      }
    }
  }
`;
