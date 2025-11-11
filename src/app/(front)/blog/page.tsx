'use client'
import MainLayout from '@/components/mainLayout';
import { Archive, Heart, MessagesSquare, Timer, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BlogModal } from './_components/BlogModal'; // Adjust as needed
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbChevronDownRight } from 'react-icons/tb';

interface BlogPost {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    image?: string;
    likes: number;
    comments: { author: string; text: string; createdAt: string }[];
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [commentText, setCommentText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('/api/blog');
                if (!res.ok) throw new Error('Failed to fetch posts');
                const data = await res.json();
                setPosts(data.posts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const handleLike = async (id: string) => {
        // Optimistically update the UI first
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post._id === id ? { ...post, likes: post.likes + 1 } : post
            )
        );

        // Send the request to update the likes in the backend
        try {
            const res = await fetch(`/api/blog/${id}/like`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });
            const data = await res.json();

            // If successful, ensure the correct likes count is reflected in the UI
            if (data.success) {
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post._id === id ? { ...post, likes: data.likes } : post
                    )
                );
            }
        } catch (error) {
            console.error('Failed to like the post:', error);
            // Optionally handle the error, e.g., by reverting the optimistic update
        }
    };


    const handleCommentSubmit = async (id: string) => {
        const newComment = {
            author: 'User', // Adjust based on how you're managing authorship
            text: commentText,
            createdAt: new Date().toISOString(),
        };

        // Optimistically update the UI
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post._id === id ? { ...post, comments: [...post.comments, newComment] } : post
            )
        );

        setCommentText(''); // Clear the comment input immediately after submitting

        try {
            // Send the request to add the comment to the backend
            const res = await fetch(`/api/blog/${id}/comment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, comment: newComment }),
            });
            const data = await res.json();

            // Reconcile with the server response if needed
            if (data.success) {
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post._id === id ? { ...post, comments: data.comments } : post
                    )
                );
            }
        } catch (error) {
            console.error('Failed to submit the comment:', error);
            // Optionally handle the error by reverting the optimistic update
        }
    };


    if (!posts.length) {
        return (
            <MainLayout backImage='comm2.jpg' image=''>
                <div className="px-8">
                    <p className='m-8'>Loading or no posts available.</p>
                </div>
            </MainLayout>
        );
    }

    const [bannerPost, ...latestPosts] = posts;

    return (
        <MainLayout backImage='comm2.jpg' image=''>
            <div className="px-8 pb-12">
                <div className="flex py-8 items-center justify-between">
                    <div className=""></div>
                    <BlogModal />
                </div>

                {/* Banner Section for the first blog post */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <h1 className='text-4xl font-bold mb-6'>{bannerPost.title}</h1>
                        <div className="flex items-center gap-4">
                            <p className="text-sm font-bold text-slate-400">Author</p>
                            <p className="text-sm text-slate-400">5 hours ago</p>
                        </div>
                        <div className="relative">
                            <p className="text-xl mb-4">{bannerPost.content}</p>
                            <div className="flex items-center gap-2 text-slate-500">
                                <Timer className='text-sm' size={14} />
                                <small>{new Date(bannerPost.createdAt).toLocaleDateString()}</small>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6 mt-4 text-slate-500">
                                    <div className="flex items-center cursor-pointer gap-2" onClick={() => handleLike(bannerPost._id)}>
                                        <Heart size={14} />
                                        <p>{bannerPost.likes}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Archive size={14} />
                                        <p className="">150</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessagesSquare size={14} />
                                        <p className="">{bannerPost.comments.length}</p>
                                    </div>
                                </div>
                                <Button className='bg-blue-800 hover:bg-blue-500'>
                                    <TbChevronDownRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Image
                        className='col-span-2 w-full h-[400px] object-cover rounded-lg mb-4'
                        width={1000}
                        height={400}
                        src={`${bannerPost.image}`}
                        alt={bannerPost.title}
                    />
                </div>

                {/* Latest Articles Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <h2 className='text-2xl font-bold mb-4'>Latest Articles</h2>
                    </div>
                    {latestPosts.length === 0 ? (
                        <p className='my-4'>No more posts available.</p>
                    ) : (
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            {latestPosts.map((post) => (
                                <li key={post._id} className='rounded shadow-sm border p-2'>
                                    <Image
                                        className='col-span-2 w-full object-contain rounded-lg'
                                        width={100}
                                        height={100}
                                        src={`${post.image}`}
                                        alt={post.title}
                                    />
                                    <div className="col-span-2">
                                        <div className="flex items-center gap-2">
                                            <User size={14} />
                                            <p className="">Author</p>
                                        </div>
                                        <h3 className='text-xl font-bold'>{post.title}</h3>
                                        <p className='my-4 text-sm'>{post.content.slice(0, 100)}...</p>
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Timer className='text-sm' size={14} />
                                            <small>{new Date(post.createdAt).toLocaleDateString()}</small>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-6 text-slate-500">
                                                <div className="flex items-center gap-2" onClick={() => handleLike(post._id)}>
                                                    <Heart size={14} />
                                                    <p className="">{post.likes}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Archive size={14} />
                                                    <p className="">150</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MessagesSquare size={14} />
                                                    <p className="">{post.comments.length}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            value={commentText}
                                            onChange={(e) => setCommentText(e.target.value)}
                                            placeholder="Add a comment"
                                            className="border p-2 my-2 w-full"
                                        />
                                        <Button
                                            className="bg-blue-800 hover:bg-blue-500 my-4 w-full flex items-center gap-2"
                                            onClick={() => handleCommentSubmit(post._id)}
                                        >
                                            <p>Submit Comment</p>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
