import checkmarkIcon from "../../../assets/icons/checkmark.svg";
import css from "../styles.module.scss";

export const Receipt = () => {
  return (
    <div className={css.receiptWrapper}>
      <div className={css.receipt}>
        <img className={css.success} src={checkmarkIcon} alt="success"></img>
        <h1>Payment success!</h1>
      </div>
      <span>You can close this tab</span>
    </div>
  );
};
