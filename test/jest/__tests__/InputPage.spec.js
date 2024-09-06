import IndexPage from "src/pages/IndexPage.vue";
import { shallowMount } from "@vue/test-utils";
import { nextTick } from "vue";  // เพิ่มการ import nextTick

describe("IndexPage", () => {
  it("should render correct contents", () => {
    const wrapper = shallowMount(IndexPage);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("Vue is awesome.");
  });
});

it("ตรวจสอบตัวแปรชื่อว่า title", () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        title: "Vue is awesome.",
      };
    },
  });
  let header = wrapper.find(".htmlClass h1");
  expect(header.text()).toBe("Vue is awesome.");
});
   // ทดสอบว่ามีการแสดงชื่อนามสกุลหลัง submit
  it("ควรแสดงชื่อนามสกุลหลังจากกด submit", async () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          firstName: "ธนพัทร",
          secondName: "บุญผัด",
          studentCode: "6604101330",
          nickName: 'แซ็ก',
          submitted: false,  // เริ่มต้นด้วย false
        };
      },
    });

    // จำลองการกดปุ่ม submit
    const button = wrapper.find("button");
    await button.trigger("click");

    // รอให้ Vue อัปเดต DOM
    await nextTick();

    // ตรวจสอบว่ามีการแสดงชื่อนามสกุล
    const fullName = wrapper.find('p');
    expect(fullName.text()).toBe('ชื่อ: ธนพัทร บุญผัด');
  });


test('ทศสอบว่ามี ฟอร์ม (form)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('ทศสอบว่าในฟอร์ม (form) มีการรับค่า (input)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('ทศสอบว่ามีปุ่ม (button)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
  });
