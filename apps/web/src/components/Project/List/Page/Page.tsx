import { api } from "../../../../api";
import Background from "../../../Core/Background";
import PostCard from "../Card/Card";

interface ProjectListPageProps {}

const ProjectListPage: React.VFC<ProjectListPageProps> = (props) => {
  const postQuery = api.post.all.useQuery();
  return (
    <>
      <Background
        fromGradientClassName="from-[#2e026d]"
        toGradientClassName="to-[#15162c]"
      >
        <div className="container flex flex-col items-center justify-center gap-12 self-center px-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Web</span> site
          </h1>
          <div className="flex h-[60vh] justify-center overflow-y-auto px-4 text-2xl">
            {postQuery.data ? (
              <div className="flex flex-col gap-4 p-2">
                {postQuery.data?.map((p) => {
                  return <PostCard key={p.id} post={p} />;
                })}
              </div>
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </Background>
    </>
  );
};

export default ProjectListPage;
