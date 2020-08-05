import React from 'react';
import useHover from '../../../hooks/use_hover';

const TimelineItem = ({ data }) => {
    const [hoverRef, isHovered] = useHover();
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                {data.link && (
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
                <div ref={hoverRef}>
                    {
                        isHovered ?
                        (
                            data.images.url.length === 0 ?
                            (
                                <div className="circle-images-container">
                                    <span className="circle" />
                                    <div className="image-container-null">
                                        {/* <div className="image-null-text">
                                            As a result, I am now the happiest I have ever been, and absolutely grateful and thankful for the decisions I have made.
                                        </div> */}
                                    </div>
                                </div>
                            ) : (
                                <div className="circle-images-container">
                                    <span className="circle" />
                                    <div className="image-container">
                                        {/* <img src={data.images.url[0]} className="dropdown-image"/>
                                        <img src={data.images.url[1]} className="dropdown-image"/>
                                        <img src={data.images.url[2]} className="dropdown-image"/> */}
                                    </div>
                                </div>
                            )
                        ) : (
                            <span className = "circle" />
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default TimelineItem;