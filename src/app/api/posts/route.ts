import { NextResponse } from 'next/server';
import Redis from 'ioredis';

const redis = new Redis('redis://localhost:6379');

export async function GET() {
    try {
        const cacheKey = 'posts';
        const cachedPosts = await redis.get(cacheKey);

        if (cachedPosts) {
            console.log('Serving from cache');
            return NextResponse.json({ source: 'cache', data: JSON.parse(cachedPosts) });
        }

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            return NextResponse.json({ message: 'Failed to fetch posts' }, { status: 500 });
        }

        const posts = await res.json();
        await redis.set(cacheKey, JSON.stringify(posts), 'EX', 60);

        console.log('Serving from API and caching the response');
        return NextResponse.json({ source: 'api', data: posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
