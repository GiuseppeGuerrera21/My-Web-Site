import './ArrowNav.css';

const ArrowNav = ({ onNext, onPrev, animateNext, animatePrev }) => {
  return (
    <div className="nav">
      <div
        className={`arrow prev left ${animatePrev ? 'animate' : ''}`}
        onClick={onPrev}
      >
        <i></i>
        <svg viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="2"></circle>
        </svg>
      </div>
      <div
        className={`arrow next ${animateNext ? 'animate' : ''}`}
        onClick={onNext}
      >
        <i></i>
        <svg viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="2"></circle>
        </svg>
      </div>
    </div>
  );
};

export default ArrowNav;
