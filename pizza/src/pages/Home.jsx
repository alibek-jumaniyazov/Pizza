import React from 'react'
import HomeHeader from '../companents/HomeHeader'
import PagesHeader from '../companents/PagesHeader'
import Footer from '../companents/Footer'
import Location from '../companents/Location'
import CategoriBox from '../companents/CategoriBox'
import SkidkaPizza from '../companents/SkidkaPizza'
import Pizza from './Pizza'

export default function Home() {
  return (
    <div>
      <div className="container">
          <div className="categoriBoxes">
            <CategoriBox/>
            <CategoriBox/>
            <CategoriBox/>
            <CategoriBox/>
            <CategoriBox/>
            <CategoriBox/>
            <CategoriBox/>
            <CategoriBox/>
          </div>
          <div className="SkidkaPizza">
            <SkidkaPizza/>
            <SkidkaPizza/>
            <SkidkaPizza/>
            <SkidkaPizza/>
          </div>
          <Location/>
          <Pizza/>
      </div>
    </div>
  )
}
