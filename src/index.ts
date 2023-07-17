interface User {
  name: string;
  age: number;
}

const OriginBoolean = Boolean;

export function getAdults(users: (User | null)[]): User[] {

  const Boolean = <T>(value: T): value is NonNullable<T> => OriginBoolean(value);

  return users.filter(Boolean).filter((user) => user.age >= 18);
}
