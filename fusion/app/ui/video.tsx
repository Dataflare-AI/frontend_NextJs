import Container from "./container";

const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl">
        <div className="relative bg-indigo-300 aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Adicione aqui o esqueleto do player de vídeo fake */}
            <div className="w-full h-full bg-gray-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Video;
