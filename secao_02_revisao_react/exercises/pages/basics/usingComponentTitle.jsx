import Title from '../../components/Title';

export default function usingComponentTitle() {
  return (
    <div>
      <Title
        title='Registration Page'
        subtitle='Include, modify and exclude'
      />
      <Title
        title='Login Page'
        subtitle='Enter your email and password.'
        small={true}
      />
      <Title
        title='Login Page'
        subtitle='Enter your email and password.'
        small
      />
    </div>
  )
}