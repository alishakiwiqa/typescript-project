/**
 * TypeScript Project Entry Point
 * 
 * A modern TypeScript application demonstrating type safety and best practices.
 */

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];

  /**
   * Add a new user to the system
   * @param user - User object to add
   * @returns The added user
   */
  addUser(user: User): User {
    this.users.push(user);
    console.log(`✓ User added: ${user.name} (${user.email})`);
    return user;
  }

  /**
   * Get all active users
   * @returns Array of active users
   */
  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }

  /**
   * Find user by ID
   * @param id - User ID to search for
   * @returns User if found, undefined otherwise
   */
  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  /**
   * Get total user count
   * @returns Number of users
   */
  getUserCount(): number {
    return this.users.length;
  }
}

// Demo application
function main(): void {
  console.log('🚀 TypeScript Project Starting...\n');

  const userService = new UserService();

  // Add sample users
  const users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', isActive: true },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', isActive: true },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', isActive: false }
  ];

  users.forEach(user => userService.addUser(user));

  console.log(`\n📊 Total Users: ${userService.getUserCount()}`);
  console.log(`✅ Active Users: ${userService.getActiveUsers().length}`);

  const user = userService.findUserById(1);
  if (user) {
    console.log(`\n🔍 Found user: ${user.name}`);
  }

  console.log('\n✨ TypeScript Project Running Successfully!');
}

// Run the application
main();

export { UserService, User };
