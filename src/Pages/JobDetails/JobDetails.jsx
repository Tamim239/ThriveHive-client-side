import { useLoaderData } from "react-router-dom"

export const JobDetails = () => {
const singleData = useLoaderData();
console.log(singleData)

  return (
    <div>JobDetails</div>
  )
}
