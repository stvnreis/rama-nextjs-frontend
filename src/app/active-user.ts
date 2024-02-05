'use client';

const user = {
  username: '',
};

export function getActiveUser() {
  return { username: user.username };
}

export function setActiveUser(username: string) {
  user.username = username;
}
