import React from "react";
import Audiomobil from "../../../assets/Audiomobil.jpg";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <Link to={"/payment"}>
          <div class="col">
            <div class="card h-100">
              <img src={Audiomobil} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Cleaning</h5>
                <p class="card-text">Exterior, Interior, Undercarriage.</p>
                <a href="#" class="btn btn-primary">
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </Link>

        <div class="col">
          <div class="card h-100">
            <img src={Audiomobil} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Detailing</h5>
              <p class="card-text">Wax and Polish.</p>
              <a href="#" class="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Audiomobil} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Fooging dan Fumigator</h5>
              <p class="card-text">Fooging and removing jamur.</p>
              <a href="#" class="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Audiomobil} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Coating</h5>
              <p class="card-text">nano coating dan ceramic coating.</p>
              <a href="#" class="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
