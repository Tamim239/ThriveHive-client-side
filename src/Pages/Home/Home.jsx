import { Banner } from "../../Components/ErrorPage/Banner/Banner"
import { JobCategory } from "../../Components/ErrorPage/JobCategory/JobCategory"
import { NewsLetter } from "../../Components/NewsLetter/NewsLetter"
import { Review } from "../../Components/Review/Review"
import { TeamMember } from "../../Components/TeamMember/TeamMember"
import {Helmet} from "react-helmet";

export const Home = () => {
  return (
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>THRIVEHIVE || Home</title>
            </Helmet>
        <Banner />
        <JobCategory />
        <TeamMember />
        <Review />
        <NewsLetter />

    </div>
  )
}
