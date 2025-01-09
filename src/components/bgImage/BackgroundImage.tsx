const baseImgUrl: string = import.meta.env.VITE_TMDB_IMAGE_URL + "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg"
const BackgroundImage = ({ image = baseImgUrl }: { image: string }) => {
    return (
        <div className="">
            <img className='-z-20 top-0 left-0 absolute w-full h-screen object-cover' src={image} alt="" />
            <div className="-z-10 absolute top-0 left-0  h-screen w-full bg-gradient-to-t from-black to-transparent"></div>
        </div>
    )
}

export default BackgroundImage