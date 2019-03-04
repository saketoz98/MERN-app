import React , {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import PropTypes from 'prop-types';

class List extends Component {
    componentDidMount(){
      this.props.getItems();
    }
    render(){
        const {items} = this.props.item;
        return(
            <Container>
            <ListGroup>
              <TransitionGroup className="shopping-list">
                {items.map(({ _id, name }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={
                            this.props.deleteItem.bind(this,_id)
                        }
                        
                      >
                        &times;
                      </Button>
                      {name}
                    </ListGroupItem>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ListGroup>
          </Container>
    

        )
    }
  }
List.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state=>{
  return {
    item : state.item
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    getItems : ()=>dispatch(actionCreators.getItems),
    deleteItem : ()=>dispatch(actionCreators.deleteItem)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);