import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import Image from 'next/image';
import Project2Data from '@/assets/jsonData/project/Project2Data.json';
import shape35 from '@/assets/img/shape/35.png';

const IsotopeGallery = () => {
    const galleryRef = useRef(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = Project2Data.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages) {
            const iso = new Isotope(galleryRef.current, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry',
            });

            setTimeout(() => {
                iso.layout();
            }, 500);

            return () => {
                iso.destroy();
            };
        }
    }, [loadedImagesCount, totalImages]);

    return (
        <div id="gallery-masonary" className="gallery-items colums-2" ref={galleryRef}>
            {Project2Data.map(item => (
                <div className={`gallery-item ${item.activeClass}`} key={item.id}>
                    <div className="gallery-style-two">
                        {/* Gambar tanpa link */}
                        <Image 
                            src={`/assets/img/gallery/${item.thumb}`} 
                            width={800} 
                            height={900} 
                            alt="Thumb" 
                            onLoad={handleImageLoad} 
                        />
                        <div className="shape">
                            <Image src={shape35} alt="Image Not Found" />
                        </div>
                        <div className="overlay">
                            <div className="content">
                                <span>{item.tag}</span>
                                {/* Hapus Link pada Judul */}
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IsotopeGallery;
