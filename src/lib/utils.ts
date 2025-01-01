export async function fetchPostById(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("Post Not Found");
    }
    return await res.json();
}