import React, {useEffect, useState} from 'react';
import {rollsSushi} from "../shared/rolls-&-sushi";
import Roll from "./Roll";
import SetLine from "../entities/SetLine";
import {useDispatch, useSelector} from "react-redux";
import {addSetCartAction, removeSetCartAction} from "../shared/store/cartReducer";
import Counter from "../entities/Counter";

const Set = ({set}) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.sets)

  const [isOpen, setIsOpen] = useState(false)
  const [delayedHeight, setDelayedHeight] = useState(20)
  const [height] = useState(Math.ceil(set.compound.length / 2) * 240)

  useEffect(() => {
    if (isOpen) {
      setDelayedHeight(height + 20)
      return
    }
    if (!isOpen) {
      setTimeout(() => setDelayedHeight(20),300)
    }
  },[isOpen, height])

  const setsInCart = () => {
    return cart.filter((id) => id === set.id).length
  }
  const addToCart = () => {
    dispatch(addSetCartAction(set.id))
  }
  const removeFromCart = () => {
    dispatch(removeSetCartAction(set.id))
  }


  return (
    <div
      className="set"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="set-top">
        <div className="set-wrapper">
          <h3 className="roll__header">{set.name}</h3>
          <span className="set__amount">{set.compound.length}</span>
        </div>
        {
          setsInCart()
            ? <Counter
              addAction={() => addToCart()}
              removeAction={() => removeFromCart()}
              count={setsInCart()}/>
            : <button
              onClick={(e) => {
                e.stopPropagation()
                addToCart()
              }}
              className="buy-button"
            >
              Купить
            </button>
        }
        {set.img
          ? <img src="sushi/src/widgets/Set#" alt="set" className="roll__image set__image"/>
          : <span className="set__image roll__image--warning">Картинки нет, но вы держитесь</span>
        }
      </div>
      <div
        className="set-bottom"
        style={{height: delayedHeight}}
      >
        <SetLine
          className="set-line__top"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div
          style={{height: height - 20}}
          className={'set-rolls'}>
          {set.compound.map((idIsHalf) => {
            const id = Math.trunc(idIsHalf)

            const isHalf = id !== idIsHalf
            const intoSet = rollsSushi.find((roll) =>
              roll.id === id
            )
            return <Roll key={intoSet.id} isHalf={isHalf} roll={intoSet}/>
          })}
          <div
            style={{height}}
            className={'set-wall ' + (isOpen ? 'set-wall--open' : 'set-wall--closed')}>
          </div>
        </div>
        <SetLine
          className="set-line__bottom"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <span className="weight set__weight">
        {set.compound.length * 250} г.
      </span>
    </div>
  );
};

export default Set;