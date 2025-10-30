export type User = {
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    hashedPassword: string,
    email: string,
    favoriteSnippets: number[],
    likedSnippets: number[],
}