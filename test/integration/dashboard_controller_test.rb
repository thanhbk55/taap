class DashControllerTest < ActionDispatch::IntegrationTest
  test 'assert_react_component' do
    get "/app/dashboard"
    assert_equal 200, response.status
    binding.pry

    # assert rendered react component and check the props
    assert_react_component "screen/Dashboard/Dashboard" do |props|
      assert_equal "Hello from react-rails.", props[:greeting]
      assert_equal "react-rails", props[:info][:name]
      assert_select "[class=?]", "hello-world"
    end

    # # or just assert component rendered
    assert_react_component "screen/Dashboard/components/common/atoms/NavLink"
  end
end