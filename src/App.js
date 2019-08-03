import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Card from "./components/Card/Card";
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0,
    clicked: [],
  }

  handleClick = id => {
    // if image is clicked
    if (this.state.clicked.indexOf(id) === -1) {
      // push it to clicked array
      var clicked = this.state.clicked.push(id);
      // increment score by 1
      this.setState(
        { score: this.state.score + 1 });
      shuffle(this.state.cards);
      console.log(this.state.clicked);
    }
    if (!clicked) {
      alert("You clicked that landmark already! Try again?");
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
      if (this.state.score > this.state.topscore) {
        this.setState({ topscore: this.state.score });
      }
      shuffle(this.state.cards);
    }
    if (this.state.score === 11) {
      alert("You won! Play again?");
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
      this.setState({ topscore: 12 });
      shuffle(this.state.cards);
    }
    // shuffle image cards
    function shuffle(card) {
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [card[i], card[j]] = [card[j], card[i]];
      }
      return card;
    }
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Wrapper>
          <Container style={{ marginTop: 30 }}>
            <Row>
              {this.state.cards.map(card => (
                <Card
                  handleClick={this.handleClick}
                  id={card.id}
                  key={card.id}
                  image={card.image}
                />
              ))}
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div >
    );
  }
}

export default App;