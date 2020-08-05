import React from "react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Pdf from "../example.pdf";
import Button from "react-bootstrap/Button";

class AppItem extends React.Component {
	render = () => {
		var app = this.props.app;
		return (
			<mobiscroll.Card theme="ios" themeVariant="light">
				<mobiscroll.CardContent>
					<img className="md-img" src={app.image} draggable="false" />
					<mobiscroll.CardTitle>{app.title}</mobiscroll.CardTitle>
					<mobiscroll.CardSubtitle>{app.dev}</mobiscroll.CardSubtitle>
					<div className="md-rank">
						{app.rank}
						<span className="mbsc-ic mbsc-ic-star3"></span>
					</div>
					<Button href={app.pdf} variant="outline-primary">
						Download Pdf
					</Button>
				</mobiscroll.CardContent>
			</mobiscroll.Card>
		);
	};
}

class Content extends React.Component {
	render = () => {
		return (
			<div className="md-cards">
				<div className="md-card-cont">
					<h3>Grammar / Spelling</h3>
					<mobiscroll.ScrollView
						className="demo-card"
						layout="fixed"
						itemWidth={200}
						snap={false}
						theme="ios"
						themeVariant="light"
					>
						{this.props.newGames.map(function (app) {
							return <AppItem app={app} key={app.id} />;
						})}
					</mobiscroll.ScrollView>

					<h3>Essay Writing</h3>
					<mobiscroll.ScrollView
						className="demo-card"
						layout="fixed"
						itemWidth={200}
						snap={false}
						theme="ios"
						themeVariant="light"
					>
						{this.props.mediaVideo.map(function (app) {
							return <AppItem app={app} key={app.id} />;
						})}
					</mobiscroll.ScrollView>

					<h3>Reading comprehension</h3>
					<mobiscroll.ScrollView
						className="demo-card"
						layout="fixed"
						itemWidth={200}
						snap={false}
						theme="ios"
						themeVariant="light"
					>
						{this.props.newUpdated.map(function (app) {
							return <AppItem app={app} key={app.id} />;
						})}
					</mobiscroll.ScrollView>
				</div>
			</div>
		);
	};

	static defaultProps = {
		newGames: [
			{
				id: 1,
				image: "/book.png",
				title: "Test 1",
				dev: "Verbs and Nouns",
				rank: 4.2,
				pdf: Pdf,
			},
			{
				id: 2,
				image: "/book.png",
				title: "Test 2",
				dev: "Verbs and Nouns",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 3,
				image: "/book.png",
				title: "Test 3",
				dev: "Verbs and Nouns",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 4,
				image: "/book.png",
				title: "Test 4",
				dev: "Verbs and Nouns",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 5,
				image: "/book.png",
				title: "Test 5",
				dev: "Verbs and Nouns",
				rank: 4.2,
				pdf: Pdf,
			},
			{
				id: 6,
				image: "/book.png",
				title: "Test 6",
				dev: "Verbs and Nouns",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 7,
				image: "/book.png",
				title: "Test 7",
				dev: "Test 6",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 8,
				image: "/book.png",
				title: "Test 8",
				dev: "Verbs and Nouns",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 9,
				image: "/book.png",
				title: "Test 9",
				dev: "Verbs and Nouns",
				rank: 4.4,
				pdf: Pdf,
			},
		],
		mediaVideo: [
			{
				id: 1,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 2,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 3,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 4,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 5,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 6,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 7,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 8,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 9,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
			{
				id: 10,
				image: "/PDF.svg",
				title: "Essay",
				dev: "Videolabs ",
				rank: 4.3,
				pdf: Pdf,
			},
		],
		newUpdated: [
			{
				id: 1,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 2,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 3,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 4,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 5,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 6,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 7,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 8,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
			{
				id: 9,
				image: "/reading.jpg",
				title: "Reading",
				dev: "Example",
				rank: 4.4,
				pdf: Pdf,
			},
		],
	};
}

export default Content;
