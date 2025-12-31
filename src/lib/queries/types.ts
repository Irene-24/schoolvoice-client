export interface LocalizedName {
  en: string;
  ar?: string;
}

export interface School {
  id: string;
  name: LocalizedName;
  image?: string;
}

export interface LeaderboardStudentEntry {
  id: string;
  name: LocalizedName;
  grade: string;
  section: string;
  schoolName: LocalizedName;
  points: number;
  studentImage?: string | null;
}

export interface SchoolScopedLeaderboardData {
  school: School;
  students: LeaderboardStudentEntry[];
}

export interface GetLeaderboardData {
  studentsLeaderboard: SchoolScopedLeaderboardData;
}
