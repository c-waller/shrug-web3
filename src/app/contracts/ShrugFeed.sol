// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ShrugFeed
{
    struct Post
    {
        string cid;
        uint timestamp;
        address poster;
    }

    Post[] public posts;

    // post to #feed
    function addPost(string memory cid) public 
    {
        if (posts.length < 10) // ok to add to posts array
        {
            posts.push(Post(cid, block.timestamp, msg.sender));
        } 

        else // need to delete oldest post from array
        {
            // shift all posts left (deletes the oldest)
            for (uint i = 1; i < posts.length; i++) 
            {
                posts[i - 1] = posts[i]; // each post gets shifted to the left (FIFO)
            }
            posts[posts.length - 1] = Post(cid, block.timestamp, msg.sender);
        }
    }

    // get all posts
    function getAllPosts() public view returns (Post[] memory) 
    {
        return posts;
    }

    // get the number of posts
    function getPostCount() public view returns (uint) 
    {
        return posts.length;
    }
}