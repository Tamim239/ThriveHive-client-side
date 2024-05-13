import { Banner } from "../../Components/ErrorPage/Banner/Banner"
import { JobCategory } from "../../Components/ErrorPage/JobCategory/JobCategory"
import { NewsLetter } from "../../Components/NewsLetter/NewsLetter"
import { Review } from "../../Components/Review/Review"
import { TeamMember } from "../../Components/TeamMember/TeamMember"

export const Home = () => {
  return (
    <div>
        <Banner />
        <JobCategory />
        <TeamMember />
        <Review />
        <NewsLetter />

    </div>
  )
}
