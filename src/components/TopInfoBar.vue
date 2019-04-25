<template>
  <section>
    <ul>
      <li>
        <a href="tel:+380972169161">+380972169161</a>
      </li>
      <li>
        <a href="tel:+380972169161">+380972169161</a>
      </li>
      <li>
        <a href="tel:+380972169161">+380972169161</a>
      </li>
      <li>
        <a href="tel:+380972169161">+380972169161</a>
      </li>
    </ul>
    <a href>{{$t('faq')}}</a>
    <a href>{{$t('credits')}}</a>
    <a href>{{$t('contacts')}}</a>
    <a href>{{$t('delivery-and-payment')}}</a>
    <a href>{{$t('warranty')}}</a>
    <change-locale/>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  border-bottom: 1px solid gray;
  background: #000;
  color: white;
  & a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    li {
      a {
        font-size: 13px;
      }
      &:not(:first-child) {
        padding-left: 10px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    ul {
      justify-content: center;
    }
  }
}
</style>
