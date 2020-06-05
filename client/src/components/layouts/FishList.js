import React, { useEffect } from 'react';
import FishListItem from './FishListItem';
import { connect } from 'react-redux';
import { getFishes } from '../../actions/fishAction';
const FishList = ({ fish: { fishes }, getFishes }) => {
  useEffect(() => {
    getFishes();
    //eslint-disable-next-line
  }, []);

  return (
    <section>
      {fishes.map((fish) => (
        <FishListItem fish={fish} key={fish.id} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => ({
  fish: state.fish,
});
export default connect(mapStateToProps, { getFishes })(FishList);
