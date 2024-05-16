import React from "react";
import Frame from "../../assets/Images/Frame.png";
import Link4 from "../../assets/Images/Link4.png";
import Link2 from "../../assets/Images/Link2.png";
import Link6 from "../../assets/Images/Link6.png";
import Link1 from "../../assets/Images/Link1.png";
import Link3 from "../../assets/Images/Link3.png";

function Members() {
	return (
		<div className="bg-[#F6F8FA] py-24 flex flex-col justify-center ">
			<div className="container">
				<div>
					<h1 className="text-center font-roboto text-medium text-[40px] text-primary">
						Find Properties in These Cities
					</h1>
					<p className="text-center font-roboto text-regular text-[17px] text-primary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>

				{/* Images */}

				<div className="grid justify-center grid-cols-4 gap-10 mt-4 font-regular">
					<div className="relative col-span-2">
						<img
							className="rounded-2xl h-[24rem] w-[42rem]"
							src={Frame}
							alt=""
						/>
						<div className="absolute top-0 p-8">
							<p className="text-white text-regular text-[15px] font-roboto">
								8 Properties
							</p>
							<p className="text-white text-medium text-[21px] font-roboto">
								New York
							</p>
						</div>
					</div>

					<div className="relative col-span-1">
						<img
							className="rounded-2xl h-[24rem] w-[20rem]"
							src={Link4}
							alt=""
						/>
						<div className="absolute top-0 p-8">
							<p className="text-white text-regular text-[15px] font-roboto">
								2 Properties
							</p>
							<p className="text-white text-medium text-[21px] font-roboto">
								Chicago
							</p>
						</div>
					</div>

					<div className="relative col-span-1">
						<img
							className="rounded-2xl h-[24rem] w-[20rem]"
							src={Link2}
							alt=""
						/>
						<div className="absolute top-0 p-8">
							<p className="text-white text-regular text-[15px] font-roboto">
								1 Property
							</p>
							<p className="text-white text-medium text-[21px] font-roboto">
								Los Angeles
							</p>
						</div>
					</div>
				</div>

				<div className="grid justify-center grid-cols-4 gap-10 mt-4 font-regular">
					<div className="relative col-span-1">
						<img
							className="rounded-2xl h-[24rem] w-[20rem]"
							src={Link6}
							alt=""
						/>
						<div className="absolute top-0 p-8">
							<p className="text-white text-regular text-[15px] font-roboto">
								0 Properties
							</p>
							<p className="text-white text-medium text-[21px] font-roboto">
								San Diego
							</p>
						</div>
					</div>
					<div className="relative col-span-1">
						<img
							className="rounded-2xl h-[24rem] w-[20rem]"
							src={Link2}
							alt=""
						/>
						<div className="absolute top-0 p-8">
							<p className="text-white text-regular text-[15px] font-roboto">
								3 Properties
							</p>
							<p className="text-white text-medium text-[21px] font-roboto">
								Florida
							</p>
						</div>
					</div>
					<div className="relative col-span-2">
						<img
							className="rounded-2xl h-[24rem] w-[42rem]"
							src={Link3}
							alt=""
						/>
						<div className="absolute top-0 p-8">
							<p className="text-white text-regular text-[15px] font-roboto">
								2 Properties
							</p>
							<p className="text-white text-medium text-[21px] font-roboto">
								Miami
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Members;
