import { userRepository } from "@/repositories/UserRepository";

export async function getOrCreateUser(
  clerkId: string,
  email?: string
) {
  let user = await userRepository.findByClerkId(clerkId);

  if (user) return user;

  return await userRepository.create({
    clerkId,
    email,
  });
}
