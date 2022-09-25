export interface Auth {
  id: string;
  created: Date;
  updated: Date;
  email: string;
  verified: boolean;
  lastResetSentAt: string;
  lastVerificationSentAt: string;
  profile: Profile;
}

export interface Profile {
  id: string;
  created: Date;
  updated: Date;
  collectionID: string;
  collectionName: string;
  avatar: string;
  name: string;
  userID: string;
  username: string;
  expand: Expand;
}

export interface Expand {}
