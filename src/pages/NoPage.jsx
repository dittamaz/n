import { Link } from 'react-router-dom';
/*import style from './NoPage.module.css';*/

export function NoPage () {
    return (
        <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-2 fw-bold text-body-emphasis">404</h1>
        <h2 className="h4">Page not found</h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to='/home' className="btn btn-primary btn-lg px-4 gap-3">Go home</Link>
          </div>
        </div>
      </div>
    )
}