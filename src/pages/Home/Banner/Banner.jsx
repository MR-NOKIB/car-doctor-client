import img1 from "../../../assets/images/homeCarousel/1.jpg"
import img2 from "../../../assets/images/homeCarousel/2.jpg"
import img3 from "../../../assets/images/homeCarousel/3.jpg"
import img4 from "../../../assets/images/homeCarousel/4.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white w-1/2 space-y-7 pl-[107px]">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
                    <a href="#slide4" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❮</a>
                    <a href="#slide2" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img
                    src={img2}
                    className="w-full rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white w-1/2 space-y-7 pl-[107px]">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
                    <a href="#slide1" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❮</a>
                    <a href="#slide3" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img
                    src={img3}
                    className="w-full rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white w-1/2 space-y-7 pl-[107px]">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
                    <a href="#slide2" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❮</a>
                    <a href="#slide4" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img
                    src={img4}
                    className="w-full rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white w-1/2 space-y-7 pl-[107px]">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❮</a>
                    <a href="#slide1" className="btn btn-circle h-[60px] w-[60px] hover:bg-orange-600 bg-inherit backdrop-brightness-90">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;