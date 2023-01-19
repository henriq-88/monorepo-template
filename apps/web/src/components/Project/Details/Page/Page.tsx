import { NotFoundError } from "@wassdahl/ui";
import { api } from "../../../../api";
import Background from "../../../Core/Background";
import { projectSlugToTitleSearch, useProjectSlug } from "./utils";

interface ProjectDetailsPageProps {}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = (props) => {
  const projectSlug = useProjectSlug();
  const { data, isLoading } = api.post.byTitleSlug.useQuery(
    projectSlugToTitleSearch(projectSlug ?? ``),
  );

  if (isLoading) {
    return (
      <Background
        fromGradientClassName="from-[#2e026d]"
        toGradientClassName="to-[#15162c]"
      >
        <div className="container flex h-screen flex-col items-center justify-center gap-12 px-4 py-8">
          <div className="flex justify-center px-4 text-2xl">Loading...</div>
        </div>
      </Background>
    );
  }

  if (!data) {
    return (
      <Background
        fromGradientClassName="from-[#2e026d]"
        toGradientClassName="to-[#15162c]"
      >
        <div className="container flex flex-1 flex-col items-center justify-center gap-12 self-center px-4 py-8">
          <NotFoundError message="No project found with the name" />
        </div>
      </Background>
    );
  }

  return (
    <>
      <Background
        fromGradientClassName="from-[#2e026d]"
        toGradientClassName="to-[#15162c]"
      >
        <div className="container flex flex-1 flex-col items-center justify-center gap-12 self-center px-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">{data?.title}</span>
          </h1>
          <div className="flex h-[60vh] justify-center px-4 text-2xl">
            {data?.content}
          </div>
        </div>
      </Background>
    </>
  );
};

export default ProjectDetailsPage;
