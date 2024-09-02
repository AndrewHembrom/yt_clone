
export function VideoCard(props: any) { 
    return (
        <div>
            <img className="rounded-xl" src={props.thumb} />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full w-15 h-15" src={props.profile} />
                </div>
                <div className="col-span-11 pl-5">
                    <div>
                        {props.title} 
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.channel}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.views} views | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}