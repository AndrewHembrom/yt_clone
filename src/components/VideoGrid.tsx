import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "What is Barca Cooking?",
    profile: "profile.jpg",
    channel: "Visca Barca",
    views: "100M",
    timestamp: "1 day ago",
    thumb: "thumbnail.png",
},{
    title: "What is Madrid Cooking?",
    profile: "profile.jpg",
    channel: "Hala Madrid",
    views: "50M",
    timestamp: "15 days ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Manan Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Sujal Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Saumil Cooking?",
    profile: "profile.jpg",
    channel: "Not Muth Galaxy",
    views: "10",
    timestamp: "1 year ago",
    thumb: "thumbnail.png",
},{
    title: "What is Ralf Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
},{
    title: "What is Andrew Cooking?",
    profile: "profile.jpg",
    channel: "Muth Galaxy",
    views: "1B",
    timestamp: "1 hour ago",
    thumb: "thumbnail.png",
}
]

export const VideoGrid = () => { 
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => (
                <div>
                    <VideoCard
                        title={video.title}
                        thumb={video.thumb}
                        profile={video.profile}
                        channel={video.channel}
                        views={video.views}
                        timestamp={video.timestamp}
                    ></VideoCard>
                </div>
            ))}
        </div>
    )
}